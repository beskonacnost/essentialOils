import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Textarea } from './ui/textarea';
import { ArrowLeft, Leaf, MapPin, Beaker, Heart, AlertTriangle, Palette, Star } from 'lucide-react';
import { Oil } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface OilDetailProps {
  oil: Oil;
  onBack: () => void;
  accessToken?: string | null;
}

export function OilDetail({ oil, onBack, accessToken }: OilDetailProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [notes, setNotes] = useState('');

  const handleToggleFavorite = () => {
    // For demo purposes, just toggle the state
    setIsFavorite(!isFavorite);
    if (!isFavorite) {
      alert('Oil added to favorites! (Demo mode)');
    } else {
      alert('Oil removed from favorites! (Demo mode)');
    }
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
        <div className="flex-1">
          <h1 className="text-xl font-semibold">{oil.name}</h1>
          <p className="text-muted-foreground text-sm italic">{oil.scientificName}</p>
        </div>
        <Button 
          variant={isFavorite ? "default" : "outline"}
          size="icon"
          onClick={handleToggleFavorite}
        >
          <Star className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
        </Button>
      </div>

      {/* Hero Image */}
      <Card>
        <CardContent className="p-0">
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center overflow-hidden">
            {oil.plantImageUrl ? (
              <ImageWithFallback 
                src={oil.plantImageUrl} 
                alt={`${oil.name} plant`}
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <div className="text-center">
                <Leaf className="w-16 h-16 text-primary mx-auto mb-2" />
                <p className="text-muted-foreground">{oil.name} Plant</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            {oil.description}
          </p>
        </CardContent>
      </Card>

      {/* Quick Facts */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Facts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-muted-foreground" />
            <div>
              <p className="font-medium">Origin</p>
              <p className="text-sm text-muted-foreground">{oil.origin}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Beaker className="w-5 h-5 text-muted-foreground" />
            <div>
              <p className="font-medium">Extraction Method</p>
              <p className="text-sm text-muted-foreground">{oil.extractionMethod}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Palette className="w-5 h-5 text-muted-foreground mt-1" />
            <div>
              <p className="font-medium">Aroma Notes</p>
              <div className="flex flex-wrap gap-1 mt-1">
                {oil.aromaNotes.map((note, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {note}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Benefits */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-red-500" />
            Benefits
          </CardTitle>
          <CardDescription>
            How this oil can support your wellness
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2">
            {oil.benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <p className="text-sm">{benefit}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Uses */}
      <Card>
        <CardHeader>
          <CardTitle>How to Use</CardTitle>
          <CardDescription>
            Popular ways to incorporate this oil into your routine
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            {oil.uses.map((use, index) => (
              <div key={index} className="p-3 bg-muted/50 rounded-lg">
                <p className="text-sm font-medium">{use}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Blends Well With */}
      <Card>
        <CardHeader>
          <CardTitle>Blends Well With</CardTitle>
          <CardDescription>
            Other oils that complement this one beautifully
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {oil.blendsWith.map((blend, index) => (
              <Badge key={index} variant="secondary">
                {blend}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Personal Notes */}
      <Card>
        <CardHeader>
          <CardTitle>Personal Notes</CardTitle>
          <CardDescription>
            Add your own notes about this oil
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder="How does this oil work for you? Any special blends or uses you've discovered?"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="min-h-[100px]"
          />
          {!isFavorite && (
            <Button 
              onClick={handleToggleFavorite}
              className="w-full mt-3"
            >
              <Star className="w-4 h-4 mr-2" />
              Save to Favorites
            </Button>
          )}
        </CardContent>
      </Card>

      {/* Precautions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-orange-500" />
            Safety & Precautions
          </CardTitle>
          <CardDescription>
            Important safety information to know
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {oil.precautions.map((precaution, index) => (
              <div key={index} className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm">{precaution}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Bottom Actions */}
      <div className="pb-20">
        <Button onClick={onBack} variant="outline" className="w-full">
          Back to Recommendations
        </Button>
      </div>
    </div>
  );
}