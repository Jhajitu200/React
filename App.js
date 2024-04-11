//  this is react core code

const parent=React.createElement(
    'div',
    {id:"parent"},
    React.createElement(
        'div',
        {id:"child"},
        [
            React.createElement('h1',{},"i am a h1 tag"),React.createElement(
            'h1',{},"i am a h1 tag"
)]
    )
)



// const heading=React.createElement(
//     'h1',
//     {id:"heading",xyz:"abc"},"this  is built by jitu kumar"
// );
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(parent);
console.log(typeof heading)