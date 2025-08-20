import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Search, Sparkles, Leaf, Heart, Settings, LogOut, Star, TrendingUp } from 'lucide-react';
import { CurrentView, User, Oil } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { getRandomOils } from '../utils/oilsDatabase';

interface HomeProps {
  onNavigate: (view: CurrentView) => void;
  user: User;
  onSignOut: () => void;
}

export function Home({ onNavigate, user, onSignOut }: HomeProps) {
  // Get featured oils from our database
  const featuredOils = getRandomOils(4);
  
  const quickSearchTerms = [
    { term: 'stress relief', icon: '😌', color: 'bg-blue-100 text-blue-700' },
    { term: 'better sleep', icon: '😴', color: 'bg-purple-100 text-purple-700' },
    { term: 'energy boost', icon: '⚡', color: 'bg-yellow-100 text-yellow-700' },
    { term: 'focus & clarity', icon: '🎯', color: 'bg-green-100 text-green-700' }
  ];

  const handleQuickSearch = (searchTerm: string) => {
    // Navigate to prompt with pre-filled search
    onNavigate('prompt');
  };

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="text-center pt-8 pb-4">
        <div className="flex items-center justify-between mb-4">
          <div className="w-8"></div>
          <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
            <Leaf className="w-8 h-8 text-white" />
          </div>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={onSignOut}
            className="w-8 h-8"
          >
            <LogOut className="w-4 h-4" />
          </Button>
        </div>
        <h1 className="text-2xl font-semibold mb-2">Essential Oils Guide</h1>
        <p className="text-muted-foreground">Your personalized path to natural wellness</p>
      </div>

      {/* Welcome Card */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-red-500" />
            Welcome back, {user.name.split(' ')[0]}!
          </CardTitle>
          <CardDescription>
            Ready to discover oils perfectly matched to your wellness needs?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button 
            onClick={() => onNavigate('prompt')} 
            className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
            size="lg"
          >
            <Search className="w-4 h-4 mr-2" />
            Get My Personalized Recommendations
          </Button>
        </CardContent>
      </Card>

      {/* Quick Search */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-blue-500" />
            Quick Wellness Goals
          </CardTitle>
          <CardDescription>
            Jump start your search with popular wellness needs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            {quickSearchTerms.map((item, index) => (
              <div 
                key={index}
                className={`p-3 rounded-lg text-center cursor-pointer hover:scale-105 transition-all ${item.color}`}
                onClick={() => handleQuickSearch(item.term)}
              >
                <div className="text-lg mb-1">{item.icon}</div>
                <p className="text-sm font-medium capitalize">{item.term}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Your Preferences */}
      {user.preferences.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Your Wellness Profile</CardTitle>
            <CardDescription>
              Based on your personal preferences and goals
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {user.preferences.length > 0 && (
                <div>
                  <p className="text-sm font-medium mb-2">Preferences:</p>
                  <div className="flex flex-wrap gap-2">
                    {user.preferences.map((pref, index) => (
                      <Badge key={index} variant="secondary" className="bg-green-100 text-green-700">
                        {pref}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
              {user.concerns.length > 0 && (
                <div>
                  <p className="text-sm font-medium mb-2">Focus Areas:</p>
                  <div className="flex flex-wrap gap-2">
                    {user.concerns.map((concern, index) => (
                      <Badge key={index} variant="outline" className="border-blue-200 text-blue-700">
                        {concern}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Featured Oils */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500" />
            Featured Essential Oils
          </CardTitle>
          <CardDescription>
            Discover some of our most popular and versatile oils
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            {featuredOils.map((oil) => (
              <div 
                key={oil.id}
                className="p-3 bg-muted/30 rounded-lg cursor-pointer hover:bg-muted/50 transition-all hover:scale-105"
                onClick={() => onNavigate('prompt')}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-2 shadow-sm">
                    {oil.imageUrl ? (
                      <ImageWithFallback 
                        src={oil.imageUrl} 
                        alt={oil.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      <Leaf className="w-6 h-6 text-primary" />
                    )}
                  </div>
                  <p className="font-medium text-sm">{oil.name}</p>
                  <p className="text-xs text-muted-foreground capitalize">
                    {oil.benefits[0]?.toLowerCase()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <Button 
          variant="outline" 
          className="h-20 flex-col gap-2 hover:bg-green-50 hover:border-green-200"
          onClick={() => onNavigate('oils')}
        >
          <Leaf className="w-6 h-6 text-green-600" />
          Browse All Oils
        </Button>
        <Button 
          variant="outline" 
          className="h-20 flex-col gap-2 hover:bg-blue-50 hover:border-blue-200"
          onClick={() => onNavigate('profile')}
        >
          <Settings className="w-6 h-6 text-blue-600" />
          My Profile
        </Button>
      </div>

      {/* Getting Started */}
      {user.preferences.length === 0 && user.concerns.length === 0 && (
        <Card className="border-amber-200 bg-amber-50/50">
          <CardHeader>
            <CardTitle className="text-amber-800">Complete Your Wellness Profile</CardTitle>
            <CardDescription className="text-amber-700">
              Tell us about your wellness goals to get better personalized recommendations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              variant="outline" 
              onClick={() => onNavigate('profile')}
              className="w-full border-amber-300 text-amber-800 hover:bg-amber-100"
            >
              <Settings className="w-4 h-4 mr-2" />
              Set Up My Profile
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Educational Tip */}
      <Card className="border-blue-100 bg-blue-50/50">
        <CardContent className="pt-4">
          <div className="text-center">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Sparkles className="w-4 h-4 text-blue-600" />
            </div>
            <p className="text-sm text-blue-800 font-medium mb-1">Did you know?</p>
            <p className="text-xs text-blue-700">
              Essential oils have been used for wellness for over 5,000 years. Our AI recommendation system combines ancient wisdom with modern science to find your perfect matches.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}