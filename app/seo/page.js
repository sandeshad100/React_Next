

const SEO = () => {
  return (
    <div>
        <h1>SEO</h1>
    </div>
  )
}

export default SEO;

export const generateMetadata = () =>{
    return {
        title: "This is a user page custom meta",
        description: "All about the user, with custom meta",
    }
}