export default function Bottom(){
    return (
        <section className="section" id="contact">
        <div>
            <h1 className="contact">Lets get in touch!</h1>
            <p className="contact" style={{paddingTop: "0.5em", paddingBottom:"0.5em"}}>I look forward to hearing from you</p>
        </div>
            <form className="contact-form" action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="fc861a74-2940-4540-9aeb-1e9e244499a1"></input>
            <div className="field is-horizontal">
  <div className="field-label is-normal">
    <label className="label">From</label>
  </div>
  <div className="field-body">
    <div className="field">
      <p className="control is-expanded has-icons-left">
        <input className="input" type="text" placeholder="Name" name="name"/>
        <span className="icon is-small is-left">
          <i className="fa-solid fa-user"></i>
        </span>
      </p>
    </div>
    <div className="field">
      <p className="control is-expanded has-icons-left has-icons-right">
        <input className="input" type="email" name="email" placeholder="Email"/>
        <span className="icon is-small is-left">
          <i className="fas fa-envelope"></i>
        </span>
      </p>
    </div>
  </div>
</div>

<div className="field is-horizontal">
  <div className="field-label"></div>
  <div className="field-body">
    <div className="field is-expanded">
      <div className="field has-addons">
        <p className="control">
          <a className="button is-static">
            +1
          </a>
        </p>
        <p className="control is-expanded">
          <input className="input" type="tel" name="number" placeholder="Your phone number" />
        </p>
      </div>
    </div>
  </div>
</div>

<div className="field is-horizontal">
  <div className="field-label">
    <label className="label">Subject</label>
  </div>
  <div className="field-body">
    <div className="field">
      <div className="control">
        <input className="input" type="text" name= "title" placeholder="e.g. Partnership opportunity" ></input>
      </div>
    </div>
  </div>
</div>

<div className="field is-horizontal">
  <div className="field-label is-normal">
    <label className="label">Question</label>
  </div>
  <div className="field-body">
    <div className="field">
      <div className="control">
        <textarea className="textarea" name="message" placeholder="Explain how I can help you"></textarea>
      </div>
    </div>
  </div>
</div>

<div className="field is-horizontal">
  <div className="field-label">
  </div>
  <div className="field-body">
    <div className="field">
      <div className="control">
        <input type="submit" className="button" value="Send"/>
          
      </div>
    </div>
  </div>
</div>
</form>
<footer className="footer">
    <div className="content has-text-centered">
    <a href="https://www.linkedin.com/in/dave-rob" target="blank_"><i className="fa-brands fa-linkedin"></i></a>
    <a href="https://www.github.com/dave-rob" target="blank_1"><i className="fa-brands fa-github"></i></a>
    <div>
      <a href="https://dave-rob.github.io/home/DaveUpdatedResume.pdf" target="blank_2"><i className="fa-regular fa-file"></i> Résumé</a>
    </div>
    <p>copyright <span>&copy;</span> 2024</p>
    </div>
</footer>
        </section>
    )

    
}