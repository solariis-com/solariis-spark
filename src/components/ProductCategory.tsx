import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CategoryListItem from './CategoryListItem';

interface ProductCategoryProps {
  title: string;
  description: string;
  imageSrc: string;
  features: Array<{
    title: string;
    description: string;
  }>;
}

const ProductCategory: React.FC<ProductCategoryProps> = ({
  title,
  description,
  imageSrc,
  features
}) => {
  return (
    <Card className="bg-white/80 backdrop-blur overflow-hidden">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="h-[300px] md:h-full relative">
          <img 
            src={imageSrc}
            alt={`${title} Products`}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <CardHeader>
            <CardTitle className="text-h3">{title}</CardTitle>
            <CardDescription className="text-body">
              {description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-6">
              {features.map((feature, index) => (
                <CategoryListItem
                  key={index}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </ul>
          </CardContent>
        </div>
      </div>
    </Card>
  );
};

export default ProductCategory;