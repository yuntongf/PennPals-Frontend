import { React, Component } from 'react';
import { Link } from 'react-router-dom';

class ReplyWritingBox extends Component {
   state = {
      reply: {
         author: "",
         content: "",
         likes: 0,
         reported: false,
         liked: false,
         read: false,
         deleted: false
      }
   }

   handleAuthorChange = (event) => {
      const reply = this.state.reply;
      reply.author = event.target.value;
      this.setState({ reply });
   }

   handleContentChange = (event) => {
      const reply = this.state.reply;
      reply.content = event.target.value;
      this.setState({ reply });
   }

   render() {
      return (
         <div>
            <div className="form-area">
               <form role="form">
                  <h2 className="" htmlFor="title" > Name </h2>

                  <div className="mt-3 mb-1 form-group">
                     <textarea onChange={this.handleAuthorChange} className="form-control" type="textarea" id="subject" placeholder="Your name" maxlength="140" rows="1"></textarea>
                  </div>
                  <small className="">For anonymity, please do not enter your real name</small>

                  <h2 className="mt-3" htmlFor="title"> Your Reply </h2>
                  <div className="mt-3 mb-3 form-group">
                     <textarea onChange={this.handleContentChange} className="form-control" type="textarea" id="subject" placeholder="Subject" maxlength="140" rows="7"></textarea>
                  </div>
                  <btn onClick={() => this.props.handleSubmit(this.state.reply, 'r')} id="submit" name="submit" className="btn btn-outline-primary pull-right">
                     <a href="" className="text-decoration-none">
                        Post
                     </a>
                  </btn>
               </form>
            </div>
         </div>
      );
   }
}

export default ReplyWritingBox;