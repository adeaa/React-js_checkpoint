import React, { Component } from 'react';

class MainContent extends Component {
    state = { 
        bun:"sesame",
        patty:"beef",
        pattiesNumber:"1",
        topping:[],
        cheese:"no",
        sauce:"Tomato Sauce",
        extra:"",
        isSubmitted:false
    }
    handleChange = event =>{
        var{ name , value}  =  event.target
        this.setState({ [name] : value })
        console.log(this.state)
    }
    handleNumberChange = event =>{
        var{ name , value}  =  event.target
        Number(value) && value>0 ?this.setState({ [name] : value }):alert("the input must be a positive number")
    }

    handleAdd = event => {
        var checked = event.target.checked
        var {topping}=this.state
        console.log(event.target)

        if(checked===true){
            var arr=[...topping,event.target.value]
            this.setState({ topping : arr })
        }else{
            var arr=topping.filter(el => el !== event.target.value)
            this.setState({ topping : arr })
        }  
    }
    handleSubmit = () => {
        this.setState({isSubmitted:true});
    }
    render() { 
        const {isSubmitted} = this.state;
        if(isSubmitted){
            var {bun,patty,pattiesNumber,topping,sauce} = this.state
            return(
                <div className="container">
                    <h4>Your customized Krabby Patty is submitted</h4>
                    <h5 style={{fontStyle:"italic"}}>final order:</h5>
                    <h6>a {bun} bun with {pattiesNumber} {patty} patty(ies) and {sauce}</h6>
                    <h6>your toppings are : {topping.length===0?"none":topping.map(el=>el+" ")}</h6>
                </div>
            )
        }
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <h1>Create your Patty!</h1>
                    
                    <section className="bun-type">
                        <label>What type of bun would you like?</label>
                        <select name="bun" onChange={this.handleChange}>
                            <option defaultValue="sesame">Sesame</option>
                            <option value="potato">Potato</option>
                            <option value="pretzel">Pretzel</option>
                            <option value="plain">Plain</option>
                            <option value="diet">Diet</option>
                        </select>
                    </section>
                    <hr/>

                    <section className="protein">
                        <label>What type of protein would you like?</label>
                        <select name="patty" onChange={this.handleChange}>
                            <option defaultValue="beef">Beef</option>
                            <option value="chicken">Chicken</option>
                            <option value="lamb">Lamb</option>
                            <option value="pork">Pork</option>
                            <option value="crab">Crab</option>
                            <option value="vegan">Vegan</option>
                        </select>
                    </section>
                    <hr/>

                    <section className="patties">
                        <label>How many patties would you like?</label>
                        <input type="number" name="pattiesNumber" defaultValue='1' onChange={this.handleNumberChange} min='0' />
                    </section>
                    <hr/>
                    
                    <section className="toppings">
                        <span>What toppings would you like?</span>
                        <br/>
                        <input type="checkbox" name="topping" onChange={this.handleAdd} value="lettuce"/>
                        <label>Lettuce</label>
                        <input type="checkbox" name="topping" onChange={this.handleAdd} value="tomato"/>
                        <label>Tomato</label>
                        <input type="checkbox" name="topping" onChange={this.handleAdd} value="onion"/>
                        <label>Onion</label>
                        <input type="checkbox" name="topping" onChange={this.handleAdd} value="pickles"/>
                        <label>Pickles</label>
                        <input type="checkbox" name="topping" onChange={this.handleAdd} value="ketchup"/>
                        <label>Ketchup</label>
                        <input type="checkbox" name="topping" onChange={this.handleAdd} value="mustard"/>
                        <label>Mustard</label>                    
                    </section>
                    <hr/>
                    
                    <section className="cheesy">
                        <span>Would you like to add cheese?</span>
                        <br/>
                        <input type="radio" name="cheese" onChange={this.handleChange} value="yes"/>
                        <label>Yes</label>
                        <input type="radio" name="cheese" onChange={this.handleChange} value="no"/>
                        <label>No</label>
                    </section>
                    <hr/>
                
                    <section className="sauce-selection">
                        <label>What type of sauce would you like?</label>
                        <input list="sauces" name="sauce" defaultValue="Tomato Sauce" onChange={this.handleChange} />
                        <datalist id="sauces">
                            <option value="Tomato Sauce"></option>
                            <option value="Barbecue Sauce"></option>
                            <option value="Crabby Patty Secret Sauce"></option>
                        </datalist>
                    </section>
                    <hr/>
                    <section className="extra-info">
                        <label>Anything else you want to add?</label>
                        <br/>
                        <textarea name="extra" onChange={this.handleChange} rows="3" cols="40"></textarea>
                    </section>
                    <hr/>

                    <section className="submission">
                        <button className="btn btn-warning btn-lg" type="submit">Submit</button>
                    </section>
                </form>
            </div>
        )
    };
}

 
export default MainContent;