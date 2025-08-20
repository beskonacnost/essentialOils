import React from 'react';
import { Button } from './ui/button';
import { LucideIcon } from 'lucide-react';
import { CurrentView } from '../App';

interface NavigationItem {
  id: CurrentView;
  icon: LucideIcon;
  label: string;
}

interface BottomNavigationProps {
  currentView: CurrentView;
  onNavigate: (view: CurrentView) => void;
  items: NavigationItem[];
}

export function BottomNavigation({ currentView, onNavigate, items }: BottomNavigationProps) {
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-background border-t border-border">
      <div className="flex items-center justify-around px-4 py-2">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          
          return (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              className={`flex-col gap-1 h-auto py-2 px-3 ${
                isActive 
                  ? 'text-primary' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              onClick={() => onNavigate(item.id)}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-primary' : ''}`} />
              <span className={`text-xs ${isActive ? 'text-primary font-medium' : ''}`}>
                {item.label}
              </span>
            </Button>
          );
        })}
      </div>
    </div>
  );
}