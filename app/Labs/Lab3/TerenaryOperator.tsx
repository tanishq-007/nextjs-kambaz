export default function TerenaryOperator(){
    let LoggedIn = true;
    return(
        <div id="wd-ternary-operator">
            <h4>Logged In</h4>
            {LoggedIn ? <p>Welcome</p> : <p>Please Login</p>} <hr/>
        </div>
    );
}