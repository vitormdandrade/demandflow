// These calculations are estimates for educational purposes. Actual investment returns, Social Security benefits, and inflation rates will vary.

export interface RetirementParams {
  currentAge: number;
  currentIncome: number;
  currentSavings: number;
  monthlyContribution: number;
  retirementAge: number;
  expectedReturn: number;
}

export interface RetirementResult {
  projectedSavings: number;
  monthlyWithdrawal: number;
  socialSecurityEstimate: number;
  totalMonthlyIncome: number;
  yearsToRetirement: number;
}

export function compoundInterest(params: {
  principal: number;
  monthlyContribution: number;
  annualRate: number;
  years: number;
}): number {
  const { principal, monthlyContribution, annualRate, years } = params;
  const r = annualRate / 100 / 12;
  const n = years * 12;
  if (r === 0) {
    return principal + monthlyContribution * n;
  }
  const fvPrincipal = principal * Math.pow(1 + r, n);
  const fvContributions = monthlyContribution * ((Math.pow(1 + r, n) - 1) / r);
  return fvPrincipal + fvContributions;
}

export function socialSecurityEstimate(params: {
  currentIncome: number;
  currentAge: number;
  retirementAge: number;
}): number {
  const { currentIncome, retirementAge } = params;
  const fullRetirementAge = 67;
  const baseMonthlyBenefit = (currentIncome * 0.4) / 12;

  let adjustmentFactor: number;
  if (retirementAge < fullRetirementAge) {
    const monthsEarly = (fullRetirementAge - retirementAge) * 12;
    const earlyReduction =
      Math.min(monthsEarly, 36) * (5 / 900) +
      Math.max(0, monthsEarly - 36) * (5 / 1200);
    adjustmentFactor = Math.max(0, 1 - earlyReduction);
  } else {
    const yearsLate = Math.min(retirementAge - fullRetirementAge, 3);
    adjustmentFactor = 1 + yearsLate * 0.08;
  }

  return baseMonthlyBenefit * adjustmentFactor;
}

export function withdrawalRate(projectedSavings: number): number {
  return (projectedSavings * 0.04) / 12;
}

export function calculateRetirement(params: RetirementParams): RetirementResult {
  const yearsToRetirement = Math.max(0, params.retirementAge - params.currentAge);

  const projectedSavings = compoundInterest({
    principal: params.currentSavings,
    monthlyContribution: params.monthlyContribution,
    annualRate: params.expectedReturn,
    years: yearsToRetirement,
  });

  const monthlyWithdrawal = withdrawalRate(projectedSavings);

  const ssMonthly = socialSecurityEstimate({
    currentIncome: params.currentIncome,
    currentAge: params.currentAge,
    retirementAge: params.retirementAge,
  });

  return {
    projectedSavings,
    monthlyWithdrawal,
    socialSecurityEstimate: ssMonthly,
    totalMonthlyIncome: monthlyWithdrawal + ssMonthly,
    yearsToRetirement,
  };
}
