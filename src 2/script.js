// Using React and ReactDOM to render the QR code generator component
const { useState } = React;

// QR Code Generator Component
function QRCodeGenerator() {
  const [text, setText] = useState(''); // State to hold input text for QR code

  // Update state as user types
  const handleChange = (event) => {
    setText(event.target.value);
  };

  // Render the QR code component
  return (
    <div className="container">
      <h1>QR Code Generator</h1>
      <input 
        type="text" 
        value={text} 
        onChange={handleChange} 
        placeholder="Enter text for QR code" 
      />
      <div className="qr-code">
        {text && <QRCode value={text} />} {/* Only render QR code if text is provided */}
      </div>
    </div>
  );
}

// Render the QR code generator in the DOM
ReactDOM.render(<QRCodeGenerator />, document.getElementById('root'));
