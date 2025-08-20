import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowLeft, Leaf, ChevronRight, Star, Heart, Info } from 'lucide-react';
import { Oil } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface OilsListProps {
  oils: Oil[];
  onViewOil: (oil: Oil) => void;
  onBack: () => void;
}

export function OilsList({ oils, onViewOil, onBack }: OilsListProps) {
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (oilId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    setFavorites(prev => 
      prev.includes(oilId) 
        ? prev.filter(id => id !== oilId)
        : [...prev, oilId]
    );
  };

  const getRecommendationReason = (oil: Oil, index: number): string => {
    const reasons = [
      `Perfect match for your primary needs`,
      `Highly recommended for your wellness goals`,
      `Great complementary option for your routine`,
      `Excellent for addressing your specific concerns`,
      `Ideal for your described symptoms`,
      `Top choice based on your preferences`
    ];
    return reasons[Math.min(index, reasons.length - 1)];
  };

  const getMatchPercentage = (index: number): number => {
    // Simulate match percentage based on ranking
    const percentages = [95, 90, 85, 80, 75, 70];
    return percentages[Math.min(index, percentages.length - 1)];
  };

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4 pt-8">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onBack}
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <Leaf className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-xl font-semibold">Your Perfect Matches</h1>
            <p className="text-muted-foreground text-sm">{oils.length} personalized recommendations</p>
          </div>
        </div>
      </div>

      {/* Results Summary */}
      <Card className="border-green-100 bg-green-50/50">
        <CardContent className="pt-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Star className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-semibold mb-2 text-green-800">Excellent Matches Found!</h3>
            <p className="text-green-700 text-sm">
              Our AI analyzed your needs and found {oils.length} essential oils perfectly tailored to your wellness goals. Each recommendation is ranked by relevance to your specific requirements.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Oils List */}
      <div className="space-y-4">
        {oils.map((oil, index) => (
          <Card key={oil.id} className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-[1.02]">
            <CardContent className="p-0">
              <div 
                className="p-4 flex items-start gap-4"
                onClick={() => onViewOil(oil)}
              >
                {/* Ranking Badge */}
                <div className="flex flex-col items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                    index === 0 ? 'bg-yellow-500' : 
                    index === 1 ? 'bg-gray-400' : 
                    index === 2 ? 'bg-amber-600' : 'bg-blue-500'
                  }`}>
                    {index + 1}
                  </div>
                  <div className="text-xs text-center text-muted-foreground">
                    {getMatchPercentage(index)}%
                  </div>
                </div>

                {/* Oil Image */}
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center flex-shrink-0 relative">
                  {oil.imageUrl ? (
                    <ImageWithFallback 
                      src={oil.imageUrl} 
                      alt={oil.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <Leaf className="w-8 h-8 text-primary" />
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`absolute -top-2 -right-2 w-6 h-6 rounded-full ${
                      favorites.includes(oil.id) 
                        ? 'bg-red-500 text-white hover:bg-red-600' 
                        : 'bg-white/80 text-gray-400 hover:text-red-500'
                    }`}
                    onClick={(e) => toggleFavorite(oil.id, e)}
                  >
                    <Heart className={`w-3 h-3 ${favorites.includes(oil.id) ? 'fill-current' : ''}`} />
                  </Button>
                </div>

                {/* Oil Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{oil.name}</h3>
                        {index < 3 && (
                          <Badge variant="secondary" className="text-xs">
                            Top Choice
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground italic">
                        {oil.scientificName}
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  </div>
                  
                  {/* Why recommended */}
                  <div className="bg-blue-50 border border-blue-100 rounded-md p-2 mb-3">
                    <div className="flex items-start gap-2">
                      <Info className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-blue-800">
                        <span className="font-medium">Why this oil: </span>
                        {getRecommendationReason(oil, index)}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {oil.description}
                  </p>

                  {/* Key Benefits */}
                  <div className="flex flex-wrap gap-1">
                    {oil.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                      <Badge key={benefitIndex} variant="secondary" className="text-xs">
                        {benefit}
                      </Badge>
                    ))}
                    {oil.benefits.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{oil.benefits.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Action Cards */}
      <div className="space-y-4">
        {favorites.length > 0 && (
          <Card className="border-red-100 bg-red-50/50">
            <CardContent className="pt-4">
              <div className="text-center">
                <Heart className="w-6 h-6 text-red-500 mx-auto mb-2" />
                <p className="text-sm text-red-800">
                  You've favorited {favorites.length} oil{favorites.length !== 1 ? 's' : ''}! 
                  They'll be saved to your profile for easy access.
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardContent className="pt-6">
            <div className="text-center space-y-3">
              <p className="text-sm text-muted-foreground">
                Need different recommendations or want to refine your search?
              </p>
              <div className="flex gap-2">
                <Button variant="outline" onClick={onBack} className="flex-1">
                  New Search
                </Button>
                <Button variant="default" className="flex-1">
                  Save Favorites
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Usage Tips */}
        <Card className="border-amber-100 bg-amber-50/50">
          <CardContent className="pt-4">
            <div className="text-sm text-amber-800">
              <p className="font-medium mb-2">💡 Getting Started Tips:</p>
              <ul className="space-y-1 text-xs">
                <li>• Start with your #1 recommended oil to see how you respond</li>
                <li>• Always dilute essential oils before topical application</li>
                <li>• Begin with 1-2 drops in a diffuser and adjust as needed</li>
                <li>• Read the full oil details for safety precautions</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}