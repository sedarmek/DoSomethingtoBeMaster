import PropTypes from 'prop-types'

export class Note {
    title = 'title';
    description = {
      properies : {
        type: 'note',
        dueDate: '16/09/2022',
        tags: 'none'
      },
      comment: 'comment'
    }
    text = 'note';

    constructor(title, type, dueDate, tags, comment, text){
        this.title = title;
        this.description.properies.type = type;
        this.description.dueDate = dueDate;
        this.description.tags = tags;
        this.description.comment = comment;
        this.text = text;
    }
}

Note.propTypes = {
    title: PropTypes.string,
    type: PropTypes.string,
    dueDate: PropTypes.string,

    text: PropTypes.string
}