import PropTypes from 'prop-types';

export class Hability {
    name = 'default hability';
    hours = 0;

    constructor(name, hours){
        this.name = name;
        this.hours = hours;
    }
}

Hability.propTypes = {
    name: PropTypes.string,
    hours: PropTypes.number,
};

Hability.defaultProps = {};