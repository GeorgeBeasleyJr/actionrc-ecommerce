import DirectoryItem from "../directory-item/directory-item.component";
import HomeList from "../../categories.json";

import './directory.styles.scss';

const Directory = () => {
  const categories = HomeList;
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
      
    </div>
  )
}

export default Directory;