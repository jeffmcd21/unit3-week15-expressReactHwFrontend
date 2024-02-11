import { Form, Link, useLoaderData } from "react-router-dom"

function Index(props) {
    const cheese = useLoaderData()
    return (
        <div className="index-container">
            <h2>Create a Cheese</h2>
            <Form action="/create" method="post">
                <input type="input" name="name" placeholder="chesse name"/>
                <input type="input" name="countryOfOrigin" placeholder="chesse place origin"/>
                <input type="input" name="image" placeholder="chesse image"/>
                <input type="submit" value="create cheese"/>
            </Form>
        
        {cheese.map(cheeses => (
            <div key={cheeses._id} className="cheeses">
              <Link to={`/${cheeses._id}`}>
                <h1>{cheeses.name}</h1>
              </Link>
              <img src={cheeses.image} alt={cheeses.name} />
              <h3>{cheeses.title}</h3>
            </div>
          )
    )}
    </div>
    )
  }
  
  export default Index