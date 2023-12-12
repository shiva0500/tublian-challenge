
function PaymentSuccess(props) {
    const handleButtonClick = () => {
      // handle button click event here
    };
  
    return (
      <div className="payment-success-container">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fd3e0657-50ea-4e62-a995-e59bef392ee3?apiKey=11b372bd718849ba993071625d7d95fc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd3e0657-50ea-4e62-a995-e59bef392ee3?apiKey=11b372bd718849ba993071625d7d95fc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd3e0657-50ea-4e62-a995-e59bef392ee3?apiKey=11b372bd718849ba993071625d7d95fc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd3e0657-50ea-4e62-a995-e59bef392ee3?apiKey=11b372bd718849ba993071625d7d95fc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd3e0657-50ea-4e62-a995-e59bef392ee3?apiKey=11b372bd718849ba993071625d7d95fc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd3e0657-50ea-4e62-a995-e59bef392ee3?apiKey=11b372bd718849ba993071625d7d95fc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd3e0657-50ea-4e62-a995-e59bef392ee3?apiKey=11b372bd718849ba993071625d7d95fc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd3e0657-50ea-4e62-a995-e59bef392ee3?apiKey=11b372bd718849ba993071625d7d95fc&"className="payment-success-image"
          alt="Payment Successful"
        />
        <div className="payment-success-title">Payment Successful</div>
        <div className="payment-success-description">
          Your payment went through successfully.
        </div>
        <button className="payment-success-button" onClick={handleButtonClick}>
          Proceed
        </button>
      </div>
    );
  }

  export default  PaymentSuccess;