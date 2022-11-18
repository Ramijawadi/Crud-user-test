


const User = (props) => {

return (
<li>

    <span>{props.name} my age : {props.children}</span>
    <input onChange={props.changeEvent}   value={props.name}/> 
    <button onClick={props.deleteEvent}>delete</button>
</li>

)


}


//     life cycle component
// componentWillMount : firt state of component 
// componentDidMount : apres le render 
// compoenentDidUpdate : lorsque le component setsatate un element 
// componentDidUnmout : la destruction de composant


export default User ;