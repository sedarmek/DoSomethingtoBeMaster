import PropTypes from 'prop-types'

export class Note {
    title = 'title';
    description = 'description';
    text = 'note';

    constructor(title, description, text){
        this.title = title;
        this.description = description;
        this.text = text;
    }
}

Note.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    text: PropTypes.string
}