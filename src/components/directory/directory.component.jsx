import DirectoryItem from "../directory-item/directory-item.component";
import styled from 'styled-components';
import CategoryList from "../../category-list.json";

const DirectoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Directory = () => {
  const categories = CategoryList;
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}    
    </DirectoryContainer>
  );
};

export default Directory;