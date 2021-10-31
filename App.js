
import './App.css';
function App() {
  return (
    <div className="App">
            <div className="top">
              <div className="plane"  >
                <h4>Travel and Earn</h4>
                <h3>Add your Travel Details to start Earning Money</h3>
              </div>
              <div className="container">
                <div className="up">
                <form>
                  <div className="filerow">
                  <div className="row">
                    <div className="col" >
                      <label for="exampleInputEmail1" className="form-label">From</label>
                      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Travelling from.." />
                    
                    </div>
                    <div className="col">
                      <label for="exampleInputPassword1" class="form-label">To</label>
                      <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Travelling To.." />
                    </div>
                    <div className="col">
                      <label for="exampleInputPassword1" class="form-label">Date</label>
                      <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Date of Travelling.." />
                    </div>
                    <div className="col">
                      <label for="exampleInputPassword1" class="form-label">Time</label>
                      <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Time of Travelling.."/>
                    </div>
                    <div className="col">
                      <label for="exampleInputPassword1" class="form-label">Arrival</label>
                      <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Arrival..."/>
                    </div>
                    </div>
                    </div>
                    <div className="button">
                    <button type="submit" className="btn btn-primary mybutton" data-bs-toggle="button" autocomplete="off">Add Trip</button>
                   </div>
                  </form>
                  </div>
              </div>
             
            </div>
            <div className="bottom">
              <h2>How to Earn Money Travelling</h2>
              <div className="row">
                  <div className="box col-lg-3">
                     {/* <GrFormLocation /> */}
                     <div className="ic">
                     <i className="icon bi bi-geo-alt-fill  fa-3x "></i>
                     </div>
                    <h4 className="title">Add Trip</h4>
                    <p>So easy to use, even your dog could do it.</p>
                  </div>

                  <div className="box col-lg-3">
                  <div className="ic">
                  <i className="bi bi-tablet fa-3x"></i>
                  </div>
                    <h4 className="title">Make Offer</h4>
                    <p>We have all the adventure, the greatest adventure.</p>
                  </div>

                  <div className="box col-lg-3">
                    
                  <div className="ic b">
                  <i className="bi bi-house-fill  fa-3x"></i>
                  </div>
                    <h4 className="title">Receive the product</h4>
                    <p>Find the love of your life or your money back.</p>
                  </div>

                  <div className="box col-lg-3">
                  <div className="ic">
                  <i className="bi bi-wallet  fa-3x"></i>
                  </div>
                    <h4 className="title">Deliver and Get Paid</h4>
                    <p>Find the love of your life or your money back.</p>
                  </div>

                </div>
            </div>
       
    </div>
  );
}

export default App;
