import styles from "./ProfilePicture.module.css"
// import imageUrl from "../assets/image2.webp";

function ProfilePicture() {

    const imageUrl = "./src/assets/image2.webp"

    // const handleClick = (e) => console.log('She clicked');//e.target.style.display = "none";
    const handleClick = (e) => e.target.style.display = "none";


    return (
        <img onClick={(e) => handleClick(e)} className={styles.profilePicture} src={imageUrl} alt="Profile Picture" />
    );
}

export default ProfilePicture;