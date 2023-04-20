var app = angular.module('MyApp', []);

app.controller('UserCreateController', '$scope', function ($scope) {


    //Declaração de Propriedades que serão usadas no sistema

    $usr = this;
    $usr.state = 'loading';

    $usr.controls = {
        "input": {
            "ds_first_name": {
                "is_invalid": false
            },
            "ds_last_name": {
                "is_invalid": false
            },
            "ds_email": {
                "is_invalid": false
            },
            "ds_age": {
                "is_invalid": false
            }
        }
    }

    $usr.input = {
        "ds_first_name": null,
        "ds_last_name": null,
        "ds_email": null,
        "ds_age": null,
        "ds_confirm_email": null
    }

    /////////////////////  
    //Declaração de Funções//
    //////////////////////  

    //Ao clicar no botão:
    $usr.save = function () {

        //Valida as informações do usuário
        if (!validateForm()) {
            return false;
        }

        //Código que salva o usuário no banco de dados, via injeção de dependência $http e uma "chamada AJAX".

    }


    //Faça uma função de validação para campos vazios:
    $usr.validateForm = function () {
        var hasEmptyFields = false;
        for (let k in $usr.controls.input) {
            $usr.controls.input[k].invalid = false;
            if (!$usr.input[k]) {
                hasEmptyFields = true;
                $usr.controls.input[k].invalid = true;
            }
        }

        //Aprendendo a usar o toast:
        if (hasEmptyFields) {
            Toast.fire({
                icon: 'error',
                title: 'Não é possível existir campos em branco, verifique-os e tente novamente'
            })
            return false;
        }
        //Verificando se a confirmação do e-mail é igual a versão original:

        if ($usr.controls.input.ds_confirm_email != $usr.input.ds_email) {
            $usr.controls.input.ds_confirm_email.invalid = true;
            Toast.fire({
                icon: 'error',
                title: 'A confirmação de email não é idêntica ao email fornecido. Verifique-o e tente novamente.'
            })
            return false;
        }

        //Deu certo? 
        return true;
    }

    /*
    Injeção de dependências e seus significados:

    $scope = É o objeto Angular JS usado para alterar e gerenciar elementos do DOM.
    $q = Promessas são o resultado final de uma operação assíncrona(AJAX P EX). $q é uma ferramenta que facilita o gerenciamento destas. 
    DataService = "encapsula" ou "junta" os processos de comunicações com a API do servidor, no caso create, lida com chamadas de API para criação e gerenciamento de usuários
    EventControllerService = Segue o nome, adiciona eventos ao sistema capazes de reagir de acordo com x ou y eventos. como um addEventListener.
    Utils = É um conjunto de utilitários pensando em facilitar o uso do angularjs como ler arquivos, exibir notificações e etc.
*/


    //Utilização do ng-class:




})
