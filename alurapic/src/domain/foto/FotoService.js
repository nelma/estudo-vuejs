export default class FotoService {
    constructor(resource) {
     // _resource: por convencao indica que é uma valor privado.
        this._resource = resource('v1/fotos{/id}');
    }

    cadastra(foto) {

        if(foto._id) {
            return this._resource.update({id: foto._id}, foto);
        } else {
            return this._resource.save(foto);
        }
    }

    lista() {

      //query retorna uma promise que é a reposta (res) e retornando a promise
        return this._resource.query()
                            .then(
                                res => res.json(),
                                err => {
                                    console.log(err);
                                    throw new Error('Não foi possivel obter as fotos. Tente mais tarde!');
                                }
                            );
    }

    apaga(id) {
        return this._resource.delete({id})
                            .then(null, err => {
                                console.log(err);
                                throw new Error('Não foi possivel remover a foto. Tente mais tarde!');
                            });
    }

    busca(id) {
        return this._resource.get({ id })
                            .then(res => res.json());
    }
}
