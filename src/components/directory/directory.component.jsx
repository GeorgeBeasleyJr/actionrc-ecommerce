import DirectoryItem from "../directory-item/directory-item.component";
import HomeList from "../../categories.json";

import { DirectoryContainer } from './directory.styles';

const Directory = () => {
  const categories = HomeList;
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
      
    </DirectoryContainer>
  )
}

export default Directory;