/*import React, { Component } from 'react';
import Identicon from 'identicon.js';

class Main extends Component {

  render() {
    return (
<div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '500px' }}>
              <div className="content mr-auto ml-auto">
                  <p>&nbsp;</p>
                  <form onSubmit={(event) => {
                  event.preventDefault()
                  const content = this.postContent.value
                  this.props.createPost(content)
                }}>
                      <div className ="form-group mr-sm-2">
                          <input
                          id="postContent"
                          type="text"
                          ref={(input) => { this.postContent = input }}
                          className="form-control"
                          placeholder="What's on your mind?"
                          required/>

                      </div>
                      <button type="submit" className ="btn btn-primary btn-block">Share</button>
                  </form>
                  <p>&nbsp;</p>

                {
                  this.props.posts.map((post,key)=>{
                    return(
                    <div className= "card mb-4" key={key}>
                      <div className= "card-header">
                      <img
                        className='mr-2'
                        width='30'
                        height='30'
                        src={`data:image/png;base64,${new Identicon(post.author, 30).toString()}`}
                      />
                        <small className = "text-muted">{post.author}</small>
                      </div>
                      <ul id="postList" className="list-group list-group-flush ">
                        <li className="list-group-item">
                          <p>{post.content}</p>
                        </li>
                        <li key={key} className="list-group-item py-2">
                        <small className="float-left mt-1 text-muted">
                          TIPS: {window.web3.utils.fromWei(post.tipAmount.toString(), 'Ether')} ETH
                        </small>
                        <button
                          className="btn btn-link btn-sm float-right pt-0">
                            <span>
                              TIP 0.1 ETH
                            </span>
                          </button>
                        </li>
                      </ul>
                    </div>
                    )
                  })
                }
              </div>
            </main>
          </div>
        </div>
    );
  }
}
export default Main;*/
import React,{ Component } from 'react'
import Identicon from 'identicon.js'


class Main extends Component
{
	submitHandler = (event) => {
		event.preventDefault()
		 const content = this.postContent.value
		 this.props.createPost(content)
	}


	render(){
		return (
			<div className="container-fluid mt-5">
			 <div style={{image:"url(https://www.helix3.co/wp-content/uploads/2018/08/doctor-hallway.jpg) " }} >
			<div>
			<h1 class="text-center"style={{color: "black;"}}>Dossier de patient </h1>
                <div id="content" >
                  <form>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="inputEmail4" ><i>  Numéro de Dossier</i></label>
                        <output type="email" class="form-control" id="iid" ></output>
                      </div>
                      <div class="form-group col-md-6">
                        <label for="inputEmail4" ><i>Nom</i> </label>
                        <output type="email" class="form-control" id="iname" ></output>
                      </div>
                      <div class="form-group col-md-6">
                        <label for="inputEmail4"><i>Pénom</i> </label>
                        <output type="email" class="form-control" id="ipren" ></output>
                      </div>
                      <div class="form-group col-md-6">
                        <label for="inputEmail4"><i>Adresse</i> </label>
                        <output type="email" class="form-control" id="iadd" ></output>
                      </div>
                      <div class="form-group col-md-6">
                        <label for="inputEmail4"><i>Numéro de téléphone</i>  </label>
                        <output type="email" class="form-control" id="itel" ></output>
                      </div>
                      <div class="form-group col-md-6">
                        <label for="inputPassword4"><i>La date de consultation</i></label>
                        <output type="password" class="form-control" id="idate"></output>
                      </div>
                      <div class="form-group col-md-6">
                        <label for="inputPassword4"><i>Medecin consultant</i></label>
                        <output type="password" class="form-control" id="idoctor" ></output>
                      </div>
                    </div>
                    
                  </form>
                </div>
          </div>
        
		  <h1 class="text-center"style={{color: "black;"}}>Ajouter un médicament </h1>

	          <div className="row">

	            <main role="main" className="col-lg-12 ml-auto mr-auto" style={{maxWidth : '500px'}}>
	              <div className="content  mr-auto ml-auto">
				  <p>&nbsp;</p>
				  <form onSubmit={this.submitHandler}>
				  	<div className="form-group mr-sm-2">
					<input
						id = "postContent"
						type = "text"
						placeholder="Ajouter un médicament"
						ref={(input)=>{this.postContent = input}}
						className = "form-control"
						required
						/>
					</div>
					<button type = "submit" className="btn btn-primary btn-block">Ajouter</button>
				  </form>
				  <p>&nbsp;</p>
				  {this.props.posts.map((post,key) => {
	                  return (
	                      <div className="card mb-4" key={key} >
	                    <div className="card-header">
	                    <img className='mr-2'
	                      width='30'
	                      height='30'
	                      src={`data:image/png;base64,${new Identicon(post.author,30).toString()}`}
	                      />

	                       <small className="text-muted">{post.author}</small>
	                    </div>
	                    <ul id="postList" className="list-group list-group-flush">
	                      <li className="list-group-item">
	                        <p>{post.content}</p>
	                      </li>
	                      <li key={key} className="list-group-item py-2">
	                        <small className = "float-left mt-1 text-muted">
	                        TIPS : {window.web3.utils.fromWei(post.tipAmount.toString(),'Ether')} ETH
	                        </small>
							<button
						 className="btn btn-link btn-sm float-right pt-0"
						 name={post.id}
						 onClick={(event) => {
						   let tipAmount = window.web3.utils.toWei('0.1', 'Ether')
						   console.log(event.target.name, tipAmount)
						   this.props.tipPost(event.target.name, tipAmount)
						 }}
					   >
						 TIP 0.1 ETH
					   </button>
	                      </li>
	                    </ul>
	                  </div>
	                  )
	              })}
	              </div>
	            </main>
	          </div>
			  </div>
			  

	        </div>


		)}
}

export default Main