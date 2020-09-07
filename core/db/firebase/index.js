import firebase from '@react-native-firebase/app';
import '@react-native-firebase/database';

class FireBase{
    constructor() {
        this.defaultApp = firebase.apps?.filter(app => app._name);
        this.credentials = require('./credentials.json');

        if (this.defaultApp.length === 0)
            firebase.initializeApp(this.credentials);

        this.dataBase = firebase.database();
    }

    /**
     * Getting  instances from particular collection
     * @param {string} ref name of collection
     * @param {function} done
     */
    get(ref, done){
        this.dataBase
            .ref(ref)
            .once('value', snap => {
                const organizations = snap.val();
                const organizationsList = [];

                Object.keys(organizations).forEach(key => {
                    organizationsList.push(organizations[key])
                });

                done(organizationsList);
            })
    }

    /**
     * Saving data to firebase
     * @param {string} ref
     * @param {Object} data
     */
    setEntity (ref, data){
        this.dataBase
            .ref(ref)
            .set(data)
            .then(() => {
                console.log('Entity saved by ref: ', ref);
                done();
            })
    }

}

module.exports ={
    FireBase
}
