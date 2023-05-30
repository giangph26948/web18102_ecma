const useState = (initialState) => {
    let state = initialState;

    function getState() {
        return state;
    }
    function setState(newState) {
            state = newState;
        }
    return [getState, setState];    
}
const [state , setState] = useState('Dat');
console.log(state());
setState('Kien');
console.log(state());