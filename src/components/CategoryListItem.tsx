import React from 'react';

interface CategoryListItemProps {
  title: string;
  description: string;
}

const CategoryListItem: React.FC<CategoryListItemProps> = ({ title, description }) => {
  return (
    <li className="flex items-start gap-2 mb-4">
      <div>
        <span className="font-semibold text-body block mb-2">{title}</span>
        <p className="text-body-sm text-text-light">{description}</p>
      </div>
    </li>
  );
};

export default CategoryListItem;