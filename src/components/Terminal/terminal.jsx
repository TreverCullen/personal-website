import './terminal.css';
import React from 'react';
import $ from 'jquery';
import me from './me.jpeg';

class Terminal extends React.Component {

  constructor() {
    super();

    this.home = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>;
    this.chev = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>;
    this.chevs = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevrons-right"><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></svg>;
    this.user = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>;
    this.github = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>;
    this.facebook = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
    this.instagram = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line></svg>;
    this.mail = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
    this.phone = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;

    this.me = <img src={me} alt="couldn't find my looks :(" />
  }

  render() {
    return (
      <div className="terminal">
        <div className="terminal-top">{this.home} trevercullen - home</div>

        <div className="terminal-body">

          <p>{this.chev} <span>whoami</span></p>
          <p className="inset pad">{this.chevs} trever thomas cullen</p>
          <p>{this.chev} <span>trev.picture</span></p>
          <p className="inset pad slow">{this.chevs} loading me.jpg...</p>
          <p className="inset pad">{this.me}</p>
          <p className="inset pad">{this.chevs} ...done</p>
          <p>{this.chev} <span>trev.from</span></p>
          <p className="inset pad">{this.chevs} reno, nv</p>

          <p>{this.chev} <span>trev.edu.school</span></p>
          <p className="inset pad">{this.chevs} university of michigan</p>
          <p>{this.chev} <span>trev.edu.major</span></p>
          <p className="inset pad">{this.chevs} computer science engineering</p>
          <p>{this.chev} <span>trev.edu.minor</span></p>
          <p className="inset pad">{this.chevs} mathematics</p>

          <p>{this.chev} <span>trev.interests</span></p>
          <p className="inset">{this.chevs} food</p>
          <p className="inset">{this.chevs} traveling</p>
          <p className="inset">{this.chevs} motorcycles</p>
          <p className="inset pad">{this.chevs} edm</p>

          <p>{this.chev} <span>trev.media</span></p>
          <p className="inset">{this.chevs} 
            <a href="https://www.linkedin.com/in/trever-cullen-19914b60/">{this.user} linkedin</a>
          </p>
          <p className="inset">{this.chevs} 
            <a href="https://github.com/TreverCullen">{this.github} github</a>
          </p>
          <p className="inset">{this.chevs} 
            <a href="https://www.facebook.com/trever.cullen">{this.facebook} facebook</a>
          </p>
          <p className="inset pad">{this.chevs} 
            <a href="https://www.instagram.com/iamttc/?hl=en">{this.instagram} instagram</a>
          </p>

          <p>{this.chev} <span>trev.contact</span></p>
          <p className="inset">{this.chevs} {this.mail} trevercullen@gmail.com</p>
          <p className="inset pad">{this.chevs} {this.phone} 775-544-0666</p>

          <p>{this.chev}</p>
        </div>
      </div>
    );
  }

  componentDidMount() {
    let elt = $('.terminal p').first();
    this.showContent(elt);
  }

  showContent = (elt) => {
    if (!elt.is('p'))
      return;

    if (elt.hasClass('inset')) {
      $('.blink').remove();
      if (elt.hasClass('slow')) {
        elt.fadeIn(300).delay(500).promise().then(() => {
          this.showContent(elt.next());
        });
      }
      else {
        elt.fadeIn(300);
        this.showContent(elt.next());
      }
    }

    else {
      this.typeContent(elt).then(() => {
        this.showContent(elt.next());
      });
    }
  }

  typeContent = (elt) => {
    return new Promise((resolve) => {
      let type_time = 130;
      let span = elt.find('span');
      let content = span.text().split('');

      span.text('');
      elt.fadeIn(300);
      elt.append('<div className="blink" class="blink">▋</div>');
      this.scrollTerminal();

      elt.delay(type_time * content.length + 1000).promise().then(() => {
        resolve();
      });

      $.each(content, (idx, val) => {
        setTimeout(() => {
          span.append(val);
        }, idx * type_time + 1000);
      });
    });
  }

  scrollTerminal = () => {
    let container = $('.terminal-body');
    container.scrollTop(container[0].scrollHeight);
  }
}

export default Terminal;
