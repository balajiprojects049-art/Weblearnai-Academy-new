# Shopping Cart & Razorpay Payment Integration

## Features Added

### 1. Shopping Cart System
- **Cart Context**: Global state management for cart items
- **Cart Drawer**: Sliding cart panel with:
  - Item list with images
  - Quantity controls (+/-)
  - Remove item functionality
  - Total price calculation
  - Clear cart option

### 2. Add to Cart Functionality
- **Books Module**: Book preview section with "Add to Cart" button
- **Courses Module**: Course cards with "Add to Cart" + "View" buttons
- Each item shows price in INR (₹)
- Visual feedback when items are added ("Added!" confirmation)

### 3. Razorpay Payment Integration
- Integrated Razorpay checkout
- Automatic calculation of total in paise
- Custom branding (purple theme)
- Payment success handling
- Order notes with cart items

## Setup Razorpay

### Step 1: Create Razorpay Account
1. Go to [https://razorpay.com/](https://razorpay.com/)
2. Sign up for a free account
3. Complete the KYC verification

### Step 2: Get API Keys
1. Log in to Razorpay Dashboard
2. Navigate to **Settings** → **API Keys**
3. Generate **Test Mode** keys first (for development)
4. Copy your **Key ID**

### Step 3: Configure in Your App
Open `src/components/cart/CartDrawer.tsx` and replace:
```typescript
key: "YOUR_RAZORPAY_KEY_ID"
```
With your actual Razorpay Key ID:
```typescript
key: "rzp_test_XXXXXXXXXXXX"
```

### Step 4: Test Payment
1. Add items to cart
2. Click "Proceed to Pay"
3. Use Razorpay test cards:
   - Card: `4111 1111 1111 1111`
   - CVV: Any 3 digits
   - Expiry: Any future date

### Step 5: Go Live (Production)
1. Complete Razorpay account activation
2. Switch to **Live Mode** in dashboard
3. Generate **Live API Keys**
4. Replace test key with live key
5. Set up webhook for payment verification

## Backend Integration (Recommended)

For production, you should:

1. **Create API Endpoint** (`/api/payment/create-order`)
```typescript
// Create Razorpay order server-side
const order = await razorpay.orders.create({
  amount: totalPrice * 100,
  currency: "INR",
  receipt: `receipt_${Date.now()}`,
  notes: { items: JSON.stringify(cartItems) }
})
```

2. **Verify Payment** (`/api/payment/verify`)
```typescript
// Verify payment signature
const isValid = verifyPaymentSignature({
  orderId: order.id,
  paymentId: payment.razorpay_payment_id,
  signature: payment.razorpay_signature
})
```

3. **Grant Access**
- Update database with enrollment
- Send confirmation email
- Grant course/book access

## Environment Variables

Create `.env.local`:
```env
RAZORPAY_KEY_ID=rzp_live_XXXXXXXXXXXX
RAZORPAY_KEY_SECRET=XXXXXXXXXXXXXXXX
```

## Security Notes

⚠️ **IMPORTANT**:
- Never expose your Key Secret in frontend code
- Always verify payments server-side
- Use HTTPS in production
- Implement proper error handling
- Log all transactions for audit

## Current Prices

### Courses
- Android App Development: ₹4,999
- Data Science + AI + ML: ₹6,999
- Python Programming: ₹3,999
- Java Programming: ₹4,499
- Web Development: ₹4,999

### Books
- The Modern Web Developer: ₹1,599

## UI Components

### Cart Button
- Fixed bottom-right position
- Shows item count badge
- Pulsing animation when items added

### Cart Drawer
- Slides in from right
- Responsive design
- Quantity controls
- Total calculation
- Razorpay payment button

## Customization

### Change Colors
Edit `src/components/cart/CartDrawer.tsx`:
```typescript
theme: {
  color: "#A855F7" // Your brand color
}
```

### Change Currency
Currently set to INR (₹). To change:
1. Update currency in Razorpay options
2. Update price display format
3. Adjust conversion rate if needed

## Testing

1. Add items to cart
2. Verify cart count updates
3. Test quantity controls
4. Test remove item
5. Test clear cart
6. TestRazorpay payment flow
7. Verify payment success callback

## Need Help?

- [Razorpay Documentation](https://razorpay.com/docs/)
- [Razorpay Integration Guide](https://razorpay.com/docs/payments/payment-gateway/web-integration/)
- [Test Cards](https://razorpay.com/docs/payments/payments/test-card-details/)
