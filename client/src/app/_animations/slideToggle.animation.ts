import { trigger, state, animate, transition, style, sequence } from '@angular/animations';

export const SlideToggleAnimation =
	trigger('slideState', [
		state('show', style({
			opacity: 1,
			visibility: 'visible'
		})),
		state('hide', style({
			opacity: 0,
			visibility: 'hidden'
		})),
		transition('show => hide', animate('300ms ease-out')),
		transition('hide => show', animate('300ms ease-in')),

		transition('* => void', [
			style({ height: '*', opacity: '1', transform: 'translateX(0)', 'box-shadow': '0 1px 4px 0 rgba(0, 0, 0, 0.3)' }),
			sequence([
				animate(".25s ease", style({ height: '*', opacity: '.2', transform: 'translateX(20px)', 'box-shadow': 'none' })),
				animate(".1s ease", style({ height: '0', opacity: 0, transform: 'translateX(20px)', 'box-shadow': 'none' }))
			])
		]),
		transition('void => *', [
			style({ opacity: '0', transform: 'translateX(20px)' }),
			sequence([
				animate(".2s ease", style({ opacity: '1', transform: 'translateX(2px)' })),
			])
		])
	])