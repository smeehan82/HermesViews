import ContentField from './content-field'

interface Content {
  id: string;
  title: string;
  slug: string;
  dateCreated: string;
  dateModified: string;
  datePublished: string;
  fields?: ContentField[];
}

export default Content