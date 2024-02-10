import { useLoaderData, Form } from "react-router-dom"
function Show() {
    const cheeses = useLoaderData()
    console.log(cheeses)
    return (
        <div className="cheeses">
            <h1>Show Component</h1>
            <h1>{cheeses.name}</h1>
            <h2>{cheeses.countryOfOrigin}</h2>
            <img src={cheeses.image} alt={cheeses.name} />
        
        <h2>Update {cheeses.name}</h2>
        <Form action={`/update/${cheeses._id}`} method="post">
            <input type="input" name="name" placeholder="cheeses name" defaultValue={cheeses.name} />
            <input type="input" name="countryOfOrigin" placeholder="cheeses origin" defaultValue={cheeses.countryOfOrigin}/>
            <input type="input" name="image" placeholder="cheeses picture" defaultValue={cheeses.image}/>
            <input type="submit" value={`update ${cheeses.name}`} />
        </Form>

        <h2>Delete Cheese</h2>
        <Form action={`/delete/${cheeses._id}`} method="post">
            <input type="submit" value={`delete ${cheeses.name}`}/>
        </Form>
        
        </div>
    )
  }
  
  export default Show