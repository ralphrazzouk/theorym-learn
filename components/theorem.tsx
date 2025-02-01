import React from 'react';

// Type definitions
interface DefinitionBoxProps {
  title: string;
  number?: string;
  name?: string;
  children: React.ReactNode;
  borderColor: string;
  backgroundColor: string;
  titleColor: string;
}

interface DefinitionLikeProps {
  number?: string;
  name?: string;
  children: React.ReactNode;
}

// Color definitions with TypeScript types
interface DefinitionColors {
  border: string;
  bg: string;
  title: string;
}

interface ColorScheme {
  definition: DefinitionColors;
  theorem: DefinitionColors;
  lemma: DefinitionColors;
  corollary: DefinitionColors;
  proposition: DefinitionColors;
  claim: DefinitionColors;
  exercise: DefinitionColors;
  problem: DefinitionColors;
  example: DefinitionColors;
  question: DefinitionColors;
  solution: DefinitionColors;
  proof: DefinitionColors;
  remark: DefinitionColors;
  note: DefinitionColors;
}

// Colors based on the LaTeX definitions
const colors: ColorScheme = {
  definition: {
    border: '#CC0000',  // red!80!black
    bg: '#FFE5E5',      // red!5
    title: '#CC0000'    // red!80!black
  },
  theorem: {
    border: '#00007B', // mytheoremfr
    bg: '#F2F2F9',     // mytheorembg
    title: '#00007B'   // mytheoremfr
  },
  lemma: {
    border: '#983b0f',  // mylemmafr
    bg: '#FFFAF8',      // mylemmabg 
    title: '#983b0f'    // mylemmafr
  },
  corollary: {
    border: '#B366B3',  // myp!85!black
    bg: '#F9E6F9',      // myp!10
    title: '#B366B3'    // myp!85!black
  },
  proposition: {
    border: '#191971',  // mypropfr
    bg: '#f2fbfc',      // mypropbg
    title: '#191971'    // mypropfr
  },
  claim: {
    border: '#38A169',  // myg from preamble
    bg: '#F0FFF4',      // myg!10
    title: '#38A169'    // myg
  },
  exercise: {
    border: '#88D6D1',  // myexercisefg
    bg: '#F2FBF8',      // myexercisebg
    title: '#2A7F7F'    // myexampleti
  },
  problem: {
    border: '#333333',  // gray border
    bg: '#F7FAFC',      // light gray background
    title: '#2D3748'    // darker gray title
  },
  example: {
    border: '#88D6D1',  // myexamplefr
    bg: '#F2FBF8',      // myexamplebg
    title: '#2A7F7F'    // myexampleti
  },
  question: {
    border: '#2C3338',  // mygr from preamble
    bg: '#FFFFFF',      // white
    title: '#2C3338'    // mygr
  },
  solution: {
    border: '#38A169',  // green
    bg: '#F0FFF4',      // light green background
    title: '#2A7F7F'    // matching example title color
  },
  proof: {
    border: '#4A5568',  // gray-600
    bg: '#FFFFFF',      // white
    title: '#2D3748'    // gray-800
  },
  remark: {
    border: '#718096',  // gray-500
    bg: '#F7FAFC',      // gray-50
    title: '#4A5568'    // gray-600
  },
  note: {
    border: '#718096',  // gray-500
    bg: '#EDF2F7',      // gray-100
    title: '#4A5568'    // gray-600
  }
};

// Base TheoremBox component that other components will extend
const DefinitionBox: React.FC<DefinitionBoxProps> = ({ 
  title, 
  number, 
  name,
  children, 
  borderColor, 
  backgroundColor, 
  titleColor 
}) => {
  return (
    <div className="my-4">
      <div 
        className="relative p-4 border-l-2 rounded-sm"
        style={{ 
          borderLeftColor: borderColor,
          backgroundColor: backgroundColor 
        }}
      >
        <div 
          className="mb-2 font-bold"
          style={{ color: titleColor }}
        >
            {title} {number} {name && `- ${name}`}
        </div>
        <div className="text-gray-800">
          {children}
        </div>
      </div>
    </div>
  );
};

// Individual theorem-like components
export const Definition: React.FC<DefinitionLikeProps> = ({ number, name, children }) => (
  <DefinitionBox
    title="Definition"
    number={number}
    name={name}
    borderColor={colors.definition.border}
    backgroundColor={colors.definition.bg}
    titleColor={colors.definition.title}
  >
    {children}
  </DefinitionBox>
);

export const Theorem: React.FC<DefinitionLikeProps> = ({ number, name, children }) => (
  <DefinitionBox 
    title="Theorem"
    number={number}
    name={name}
    borderColor={colors.theorem.border}
    backgroundColor={colors.theorem.bg}
    titleColor={colors.theorem.title}
  >
    {children}
  </DefinitionBox>
);

export const Lemma: React.FC<DefinitionLikeProps> = ({ number, name, children }) => (
  <DefinitionBox
    title="Lemma"
    number={number}
    name={name}
    borderColor={colors.lemma.border}
    backgroundColor={colors.lemma.bg}
    titleColor={colors.lemma.title}
  >
    {children}
  </DefinitionBox>
);

export const Corollary: React.FC<DefinitionLikeProps> = ({ number, name, children }) => (
  <DefinitionBox
    title="Corollary"
    number={number}
    name={name}
    borderColor={colors.corollary.border}
    backgroundColor={colors.corollary.bg}
    titleColor={colors.corollary.title}
  >
    {children}
  </DefinitionBox>
);

export const Proposition: React.FC<DefinitionLikeProps> = ({ number, name, children }) => (
  <DefinitionBox
    title="Proposition"
    number={number}
    name={name}
    borderColor={colors.proposition.border}
    backgroundColor={colors.proposition.bg}
    titleColor={colors.proposition.title}
  >
    {children}
  </DefinitionBox>
);

export const Claim: React.FC<DefinitionLikeProps> = ({ number, name, children }) => (
  <DefinitionBox
    title="Claim"
    number={number}
    name={name}
    borderColor={colors.claim.border}
    backgroundColor={colors.claim.bg}
    titleColor={colors.claim.title}
  >
    {children}
  </DefinitionBox>
);

export const Problem: React.FC<DefinitionLikeProps> = ({ number, name, children }) => (
  <DefinitionBox
    title="Problem"
    number={number}
    name={name}
    borderColor={colors.problem.border}
    backgroundColor={colors.problem.bg}
    titleColor={colors.problem.title}
  >
    {children}
  </DefinitionBox>
);

export const Exercise: React.FC<DefinitionLikeProps> = ({ number, name, children }) => (
  <DefinitionBox
    title="Exercise"
    number={number}
    name={name}
    borderColor={colors.exercise.border}
    backgroundColor={colors.exercise.bg}
    titleColor={colors.exercise.title}
  >
    {children}
  </DefinitionBox>
);

export const Example: React.FC<DefinitionLikeProps> = ({ number, name, children }) => (
  <DefinitionBox
    title="Example"
    number={number}
    name={name}
    borderColor={colors.example.border}
    backgroundColor={colors.example.bg}
    titleColor={colors.example.title}
  >
    {children}
  </DefinitionBox>
);

export const Question: React.FC<DefinitionLikeProps> = ({ number, name, children }) => (
  <DefinitionBox
    title="Question"
    number={number}
    name={name}
    borderColor={colors.question.border}
    backgroundColor={colors.question.bg}
    titleColor={colors.question.title}
  >
    {children}
  </DefinitionBox>
);

export const Solution: React.FC<DefinitionLikeProps> = ({ number, name, children }) => (
  <DefinitionBox
    title="Solution"
    number={number}
    name={name}
    borderColor={colors.solution.border}
    backgroundColor={colors.solution.bg}
    titleColor={colors.solution.title}
  >
    {children}
  </DefinitionBox>
);

export const Proof: React.FC<DefinitionLikeProps> = ({ number, name, children }) => (
  <DefinitionBox
    title="Proof"
    number={number}
    name={name}
    borderColor={colors.proof.border}
    backgroundColor={colors.proof.bg}
    titleColor={colors.proof.title}
  >
    {children}
  </DefinitionBox>
);

export const Remark: React.FC<DefinitionLikeProps> = ({ number, name, children }) => (
  <DefinitionBox
    title="Remark"
    number={number}
    name={name}
    borderColor={colors.remark.border}
    backgroundColor={colors.remark.bg}
    titleColor={colors.remark.title}
  >
    {children}
  </DefinitionBox>
);

export const Note: React.FC<DefinitionLikeProps> = ({ number, name, children }) => (
  <DefinitionBox
    title="Note"
    number={number}
    name={name}
    borderColor={colors.note.border}
    backgroundColor={colors.note.bg}
    titleColor={colors.note.title}
  >
    {children}
  </DefinitionBox>
);