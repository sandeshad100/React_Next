
const Projects = ({params}) => {
  console.log(params.all)
  return (
    <div>
        <h1 className="text-4xl">Projects</h1>
        App routes
        {params.all.map((p)=>(
          <li key={p}>{p}</li>
        )


        )}
    </div>
  )
}

export default Projects