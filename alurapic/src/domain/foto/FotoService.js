export default class FotoService {
    constructor(resource) {
    /**
     * _resource: por convencao indica que é uma valor privado.
     */

        this._resource = resource('v1/fotos{/id}');
    }

    cadastra(foto) {
        return this._resource.save(foto);
    }

    lista() {
        return this._resource.query().then(res => res.json());
    }

    apaga(id) {
        return this._resource.delete({id});
    }
}