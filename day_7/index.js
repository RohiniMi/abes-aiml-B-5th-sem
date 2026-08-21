{/* <div className = "div-1">
    <span>1</span>
    <span>2</span>
</div>
<div className = "div-2">
    <span>1</span>
    <span>2</span>
</div> */}

const root = ReactDOM.createRoot(document.getElementById("root"));
// const div = [React.createElement("div", { className: "div-1" },
//     [React.createElement("span", {}, "1"),
//     React.createElement("span", {}, "2")]),

// React.createElement("div", { className: "div-2" },
//     [React.createElement("span", {}, "1"),
//     React.createElement("span", {}, "2")])];
const div = <><div className="div-1">
    <span>1</span>
    <span>2</span>
</div>
    <div className="div-2">
        <span>1</span>
        <span>2</span>
    </div> </>

root.render(div);




// const div = document.getElementById("root");

// const h1 = document.createElement("h1");
// h1.innerText = "Welcome to the FSD Class";

// div.appendChild(h1);
