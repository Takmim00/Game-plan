function App() {
  return (
    <>
      <div classNameName="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div classNameName="card-body">
          <h2 classNameName="card-title">Card Title</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div classNameName="card-actions justify-end">
            <button classNameName="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
