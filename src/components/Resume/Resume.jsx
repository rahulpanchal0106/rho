
function Resume(){
    return (
    <div style={{ margin: '20px' }}>
      <a href="/my_cv.pdf" download="my-cv.pdf">
        <button style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#3498db',
          color: 'white',
          border: 'none',
          borderRadius: '5px'
        }}>
          Download My CV
        </button>
      </a>
    </div>
    )
}

export default Resume