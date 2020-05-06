import React from 'react';
import rules from '../../../../constants/rules';

export default function RulesContainer({ currentRules, handleRuleChange }) {
	return (
		<div className='rules-container'>
			{rules.map((rule) => (
				<div className='checkbox-container'>
					<input
						onChange={(e) => handleRuleChange(rule, e.target.checked)}
						id={rule}
						type='checkbox'
					/>
					<label htmlFor={rule}>{rule}</label>
				</div>
			))}
		</div>
	);
}
