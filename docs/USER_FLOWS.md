# 🗺️ PranaVital User & Data Flows

This document details the user journey workflows and state transition models across the platform using Mermaid diagrams.

---

## 1. End-to-End Customer Journey

```mermaid
flowchart TD
    A([User Lands on PranaVital]) --> B{Discovery Method}
    
    B -->|Browse by Category| C[Select Tab: Yoga Mats / Recovery / Supplements]
    B -->|Keyword Search| D[Type into Live Search Bar]
    B -->|Diagnostic Quiz| E[Click 'Mat & Health Quiz' CTA]
    
    C --> F[Filter Product Catalog Grid]
    D --> F
    E --> G[Complete 3-Step Health Consultation]
    
    G --> H[Review Personalized 3-Item Regimen]
    H -->|Add Bundle to Cart| I[Slide-Out Cart Drawer Opens]
    
    F --> J{Card Action}
    J -->|Heart Icon| K[Toggle Wishlist]
    J -->|Quick View| L[Open Full Specs Modal]
    J -->|Add to Cart| I
    
    L -->|Select Color & Qty| I
    
    I --> M{Order Qualified for Free Shipping?}
    M -->|Subtotal < $75| N[Display Remaining Free Shipping Amount]
    M -->|Subtotal >= $75| O[Green Free Shipping Progress Bar Unlocked]
    
    I --> P[Apply Promo Code e.g. ZEN25]
    P --> Q[Calculate Discount, Tax & Shipping]
    
    Q --> R[Click 'Proceed to Secure Checkout']
    R --> S[Fill Shipping & Mock Payment Details]
    S --> T[Click 'Complete Secure Order']
    T --> U([Order Confirmed: #PV-XXXXXX Receipt Displayed])
```

---

## 2. Interactive 60-Second Diagnostic Quiz Flow

```mermaid
flowchart TD
    Q0([Start Wellness Quiz]) --> Q1[Question 1: Primary Practice Focus]
    
    Q1 -->|Joint Care & Spine Relief| A1[Tag: healthcare]
    Q1 -->|Vinyasa & Hot Yoga Flow| A2[Tag: yoga-mats]
    Q1 -->|Sleep & Anxiety Relief| A3[Tag: supplements]
    Q1 -->|Meditation & Yin| A4[Tag: mindfulness]
    
    A1 & A2 & A3 & A4 --> Q2[Question 2: Target Body Discomfort]
    
    Q2 -->|Lower back & sciatica| B1[Focus: Lumbar Traction]
    Q2 -->|Sensitive knees & wrists| B2[Focus: Joint Gel Cushioning]
    Q2 -->|Nocturnal muscle tightness| B3[Focus: Magnesium Chelation]
    Q2 -->|Mental stress & fatigue| B4[Focus: Adaptogens]
    
    B1 & B2 & B3 & B4 --> Q3[Question 3: Material Priority]
    
    Q3 -->|Natural tree rubber & cork| C1[Priority: Eco]
    Q3 -->|Physician-certified orthopedic| C2[Priority: Clinical]
    Q3 -->|Lab-tested organic herbal| C3[Priority: Organic]
    
    C1 & C2 & C3 --> RES[Recommendation Engine Matches 3-Item Regimen]
    RES --> DISP[Display Tailored Regimen Modal]
    DISP --> ACT{Action}
    ACT -->|1-Click Bundle| ADD_ALL[Add All 3 Items to Cart with 20% Discount]
    ACT -->|Single Item| ADD_ONE[Add Specific Regimen Item]
```

---

## 3. Cart & Promotional Engine State Machine

```mermaid
stateDiagram-v2
    [*] --> EmptyCart
    
    EmptyCart --> ActiveCart : Add Product (ID, Variant, Qty)
    
    state ActiveCart {
        [*] --> CalculatingTotals
        CalculatingTotals --> CheckThreshold
        
        state CheckThreshold {
            SubtotalUnder75 --> StandardShipping : $8.99 Shipping Added
            SubtotalOver75 --> FreeShipping : Shipping = $0.00
        }
        
        CheckThreshold --> ApplyingCoupon
        
        state ApplyingCoupon {
            ValidateCode --> ZEN25 : 25% Off Subtotal
            ValidateCode --> PRANA10 : 10% Off Subtotal
            ValidateCode --> FREESHIP : Waives $8.99 Shipping
            ValidateCode --> Invalid : Display Error Message
        }
    }
    
    ActiveCart --> ActiveCart : Modify Quantity (+/-)
    ActiveCart --> EmptyCart : Remove Final Item
    ActiveCart --> Checkout : Click 'Proceed to Secure Checkout'
```

---

## 4. Multi-Step Checkout Flow

```mermaid
sequenceDiagram
    autonumber
    actor Customer as User
    participant Cart as Cart Drawer
    participant Modal as Checkout Modal
    participant Engine as Order Processor
    participant Toast as Toast & Confirmation Screen

    Customer->>Cart: Clicks "Proceed to Secure Checkout"
    Cart->>Modal: Transfers cart items, subtotal & shipping cost
    Modal-->>Customer: Displays Address Inputs, Card Inputs, and Item Review
    Customer->>Modal: Submits form with Name, Address, Card Details
    Modal->>Engine: Dispatches order transaction
    Engine-->>Engine: Runs mock 256-bit encryption delay (1.2s)
    Engine->>Toast: Generates random order ID (#PV-XXXXXX)
    Engine->>Modal: Renders celebratory confirmation screen
    Modal-->>Customer: Shows tracking details & delivery timeline
    Customer->>Cart: Clears cart & resets local storage
```

