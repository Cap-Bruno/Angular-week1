import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'assignment1';

  strVazia = 'Insira os dados primeiro.';
  pouco = 'Aproveite!';
  muito = 'Demais';
  value = '';
  resp = '';

  //Pegar o value do input, percorrer ele com split(',')
  //exibir na div com a classe message
  check = () =>{
    console.log("clicou");    
    if(this.value == null || this.value == ''){
      return this.resp = this.strVazia;
    }
    let numPalavras = this.value.split(',').length
    if(numPalavras <= 3){
      return this.resp = this.pouco;
    }
    else{
      return this.resp = this.muito;
    }
  }
  
}
