import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { ArrowLeft, Sparkles, Loader2, Info } from 'lucide-react';
import { Oil } from '../App';
import { generateRecommendations } from '../utils/oilsDatabase';

interface OilPromptProps {
  onRecommendations: (oils: Oil[], prompt: string, suggestions: string[]) => void;
  onBack: () => void;
}

export function OilPrompt({ onRecommendations, onBack }: OilPromptProps) {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedSuggestions, setSelectedSuggestions] = useState<string[]>([]);

  const suggestions = [
    'I need help with stress and anxiety',
    'Looking for better sleep quality',
    'Want to boost my energy naturally',
    'Need relief from headaches',
    'Help with focus and concentration',
    'Skin care and healing',
    'Muscle pain and tension relief',
    'Digestive support',
    'Immune system boost',
    'Mood enhancement and uplift',
    'Respiratory and breathing support',
    'Hair care and growth',
    'Meditation and spiritual practice',
    'Natural cleaning solutions'
  ];

  const toggleSuggestion = (suggestion: string) => {
    setSelectedSuggestions(prev => 
      prev.includes(suggestion) 
        ? prev.filter(s => s !== suggestion)
        : [...prev, suggestion]
    );
  };

  const handleGenerateRecommendations = async () => {
    if (!prompt.trim() && selectedSuggestions.length === 0) return;
    
    setIsLoading(true);
    
    // Simulate processing time for better UX
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Use the intelligent recommendation engine
    const recommendedOils = generateRecommendations(prompt, selectedSuggestions);
    
    setIsLoading(false);
    onRecommendations(recommendedOils, prompt, selectedSuggestions);
  };

  const hasInput = prompt.trim().length > 0 || selectedSuggestions.length > 0;

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
            <Sparkles className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-xl font-semibold">Find Your Perfect Oils</h1>
            <p className="text-muted-foreground text-sm">Get personalized recommendations based on your needs</p>
          </div>
        </div>
      </div>

      {/* How it works info */}
      <Card className="border-blue-100 bg-blue-50/50">
        <CardContent className="pt-4">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <Info className="w-4 h-4 text-blue-600" />
            </div>
            <div className="text-sm text-blue-800">
              <p className="font-medium mb-1">How our recommendations work:</p>
              <p>Our AI analyzes your input and matches it with our comprehensive database of essential oils, considering their properties, benefits, and traditional uses to provide the most relevant suggestions for your specific needs.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Prompt */}
      <Card>
        <CardHeader>
          <CardTitle>Describe Your Wellness Goals</CardTitle>
          <CardDescription>
            Tell us what you're hoping to achieve with essential oils. Be as specific or general as you'd like - the more details you provide, the better we can tailor our recommendations.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder="Example: I'm a busy professional who feels overwhelmed and stressed. I have trouble winding down in the evenings and often struggle to fall asleep. I'd love something natural that could help me relax after work and improve my sleep quality. I also get occasional tension headaches from long days at the computer..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="min-h-[120px] resize-none"
          />
          {prompt.trim().length > 0 && (
            <div className="mt-2 text-xs text-muted-foreground">
              {prompt.trim().length} characters
            </div>
          )}
        </CardContent>
      </Card>

      {/* Quick Suggestions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Wellness Categories</CardTitle>
          <CardDescription>
            Select any categories that match your current needs. You can choose multiple options.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {suggestions.map((suggestion, index) => (
              <Badge
                key={index}
                variant={selectedSuggestions.includes(suggestion) ? "default" : "outline"}
                className="cursor-pointer transition-all hover:scale-105"
                onClick={() => toggleSuggestion(suggestion)}
              >
                {suggestion}
              </Badge>
            ))}
          </div>
          {selectedSuggestions.length > 0 && (
            <div className="mt-3 text-sm text-muted-foreground">
              Selected: {selectedSuggestions.length} categories
            </div>
          )}
        </CardContent>
      </Card>

      {/* Generate Button */}
      <div className="space-y-3">
        <Button 
          onClick={handleGenerateRecommendations}
          className="w-full"
          size="lg"
          disabled={isLoading || !hasInput}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Analyzing your needs...
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 mr-2" />
              Get My Personalized Recommendations
            </>
          )}
        </Button>
        
        {!hasInput && (
          <p className="text-center text-sm text-muted-foreground">
            Please describe your needs or select at least one category to continue
          </p>
        )}
      </div>

      {/* Tips */}
      <Card className="border-green-100 bg-green-50/50">
        <CardContent className="pt-4">
          <div className="text-sm text-green-800">
            <p className="font-medium mb-2">💡 Pro Tips for Better Recommendations:</p>
            <ul className="space-y-1 text-xs">
              <li>• Mention specific times of day (morning energy, evening relaxation)</li>
              <li>• Include any health conditions or sensitivities</li>
              <li>• Describe your preferred application methods (diffusion, topical, etc.)</li>
              <li>• Share your experience level with essential oils</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}