// 1. External styling is simply using the index.css to style the components
//    based on tag names, this gets complicated as you have to come up with
//    unique class names to avoid conflicts

// 2. Modules sytling
//    - This is one of the best way to style react components, but you have to
//      use the .module.css extension for the file name and import the styles

// import styles from './Button.module.css';

// function Button() {
//     return (
//         <button className={styles.button}>Click me</button>
//     );
// }

// export default Button;



// 3. Inline styling
//    - This is the most flexible way to style react components, you can pass
//      the styles as an object to the style attribute of the component
//      (best used for minimal styling)

function Button() {

    const styles = {
        backgroundColor: 'red',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer'
    }

    return (
        <button className={styles}>Click </button>
    );
}

export default Button;