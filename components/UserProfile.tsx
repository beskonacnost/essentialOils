import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { ArrowLeft, Plus, X, User as UserIcon, AlertTriangle, Heart, LogOut } from 'lucide-react';
import { User } from '../App';

interface UserProfileProps {
  user: User;
  onUpdateUser: (user: User) => void;
  onBack: () => void;
  onSignOut: () => void;
}

export function UserProfile({ user, onUpdateUser, onBack, onSignOut }: UserProfileProps) {
  const [editingUser, setEditingUser] = useState<User>({ ...user });
  const [newPreference, setNewPreference] = useState('');
  const [newConcern, setNewConcern] = useState('');
  const [newAllergy, setNewAllergy] = useState('');

  const handleSave = () => {
    onUpdateUser(editingUser);
    onBack();
  };

  const addPreference = () => {
    if (newPreference.trim() && !editingUser.preferences.includes(newPreference.trim())) {
      setEditingUser({
        ...editingUser,
        preferences: [...editingUser.preferences, newPreference.trim()]
      });
      setNewPreference('');
    }
  };

  const removePreference = (pref: string) => {
    setEditingUser({
      ...editingUser,
      preferences: editingUser.preferences.filter(p => p !== pref)
    });
  };

  const addConcern = () => {
    if (newConcern.trim() && !editingUser.concerns.includes(newConcern.trim())) {
      setEditingUser({
        ...editingUser,
        concerns: [...editingUser.concerns, newConcern.trim()]
      });
      setNewConcern('');
    }
  };

  const removeConcern = (concern: string) => {
    setEditingUser({
      ...editingUser,
      concerns: editingUser.concerns.filter(c => c !== concern)
    });
  };

  const addAllergy = () => {
    if (newAllergy.trim() && !editingUser.allergies.includes(newAllergy.trim())) {
      setEditingUser({
        ...editingUser,
        allergies: [...editingUser.allergies, newAllergy.trim()]
      });
      setNewAllergy('');
    }
  };

  const removeAllergy = (allergy: string) => {
    setEditingUser({
      ...editingUser,
      allergies: editingUser.allergies.filter(a => a !== allergy)
    });
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
        <div className="flex items-center gap-3 flex-1">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <UserIcon className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <h1 className="text-xl font-semibold">My Profile</h1>
            <p className="text-muted-foreground text-sm">Personalize your oil recommendations</p>
          </div>
        </div>
        <Button 
          variant="ghost" 
          size="icon"
          onClick={onSignOut}
        >
          <LogOut className="w-5 h-5" />
        </Button>
      </div>

      {/* Basic Information */}
      <Card>
        <CardHeader>
          <CardTitle>Basic Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={editingUser.name}
              onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={editingUser.email}
              disabled
              className="bg-muted"
            />
            <p className="text-xs text-muted-foreground">Email cannot be changed</p>
          </div>
        </CardContent>
      </Card>

      {/* Wellness Preferences */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-red-500" />
            Wellness Preferences
          </CardTitle>
          <CardDescription>
            What are your main wellness goals? This helps us recommend the right oils.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {editingUser.preferences.map((pref, index) => (
              <Badge key={index} variant="secondary" className="flex items-center gap-1">
                {pref}
                <button onClick={() => removePreference(pref)}>
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            ))}
          </div>
          <div className="flex gap-2">
            <Input
              placeholder="Add a preference..."
              value={newPreference}
              onChange={(e) => setNewPreference(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addPreference()}
            />
            <Button onClick={addPreference} size="icon">
              <Plus className="w-4 h-4" />
            </Button>
          </div>
          <div className="text-xs text-muted-foreground">
            Common preferences: Relaxation, Energy, Sleep, Focus, Stress Relief, Mood Support
          </div>
        </CardContent>
      </Card>

      {/* Health Concerns */}
      <Card>
        <CardHeader>
          <CardTitle>Health Concerns</CardTitle>
          <CardDescription>
            Any specific concerns you'd like to address with essential oils?
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {editingUser.concerns.map((concern, index) => (
              <Badge key={index} variant="outline" className="flex items-center gap-1">
                {concern}
                <button onClick={() => removeConcern(concern)}>
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            ))}
          </div>
          <div className="flex gap-2">
            <Input
              placeholder="Add a concern..."
              value={newConcern}
              onChange={(e) => setNewConcern(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addConcern()}
            />
            <Button onClick={addConcern} size="icon">
              <Plus className="w-4 h-4" />
            </Button>
          </div>
          <div className="text-xs text-muted-foreground">
            Examples: Anxiety, Insomnia, Headaches, Muscle tension, Digestive issues
          </div>
        </CardContent>
      </Card>

      {/* Allergies & Sensitivities */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-orange-500" />
            Allergies & Sensitivities
          </CardTitle>
          <CardDescription>
            Help us avoid oils that might cause reactions.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {editingUser.allergies.map((allergy, index) => (
              <Badge key={index} variant="destructive" className="flex items-center gap-1">
                {allergy}
                <button onClick={() => removeAllergy(allergy)}>
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            ))}
          </div>
          <div className="flex gap-2">
            <Input
              placeholder="Add an allergy..."
              value={newAllergy}
              onChange={(e) => setNewAllergy(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addAllergy()}
            />
            <Button onClick={addAllergy} size="icon">
              <Plus className="w-4 h-4" />
            </Button>
          </div>
          <div className="text-xs text-muted-foreground">
            Examples: Citrus oils, Tree nuts, Specific plant families
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <Button onClick={handleSave} className="w-full" size="lg">
        Save Profile
      </Button>
    </div>
  );
}