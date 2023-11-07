
/**
 * 
 * <div>
 */

const parent=React.createElement("div",
    {id:"parent"},
        [React.createElement("div",
            {id:"child"},
           [ React.createElement("h1",{},"I am an h1 tag"),
           React.createElement("h2",{},"I am an h2 tag")]),
           React.createElement("div",
            {id:"child"},
           [ React.createElement("h3",{},"I am an h3 tag"),
           React.createElement("h4",{},"I am an h4 tag")])]);
// const heading= React.createElement(
//     "h1",{id:"heading"},
//     "Hello From Rreact!");
     const root=ReactDOM.createRoot
    (document.getElementById("root"));
     root.render(parent);
//parent.render(parent);
    console.log(parent);