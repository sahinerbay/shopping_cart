import { trigger, animate, style, group, animateChild, query, stagger, transition, state } from '@angular/animations';

export const routerTransition = trigger('routerTransition', [

	//transition(leave, enter) => checkout component enters while home component leaves from DOM
	transition('home => checkout', [
		/* order */
		/* 1 */ query(':enter, :leave', style({ position: 'fixed', width: '100%' })
			, { optional: true }),
		/* 2 */ group([  // block executes in parallel
			query(':enter', [
				style({ transform: 'translateY(-100%)' }),
				animate('0.5s ease-in', style({ transform: 'translateY(0%)' })) 
			], { optional: true }),
			query(':leave', [
				style({ transform: 'translate(0%)' }),
				animate('0.5s ease-out', style({ transform: 'translate(0%, 150%)' })) 
			], { optional: true }),
		])
	]),

	transition('checkout => home', [
		/* order */
		/* 1 */ query(':enter, :leave', style({ position: 'fixed', width: '100%' })
			, { optional: true }),
		/* 2 */ group([  // block executes in parallel
			query(':enter', [
				style({ transform: 'translateY(100%)' }),
				animate('0.5s ease-in', style({ transform: 'translateY(0%)' })) 
			], { optional: true }),
			query(':leave', [
				style({ transform: 'translateY(0%)' }),
				animate('0.5s ease-out', style({ transform: 'translateY(-150%)' })) 
			], { optional: true }),
		])
	]),

	transition('checkout => shipping', [
    /* order */
    /* 1 */ query(':enter, :leave', style({ position: 'fixed', width: '100%' })
			, { optional: true }),
    /* 2 */ group([  // block executes in parallel
			query(':enter', [
				style({ transform: 'translateX(100%)' }),
				animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' })) //affects shipping component
			], { optional: true }),
			query(':leave', [
				style({ transform: 'translateX(0%)' }),
				animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' })) //affects checkout component 
			], { optional: true }),
		])
	]),

	transition('shipping => checkout', [
	/* order */
	/* 1 */ query(':enter, :leave', style({ position: 'fixed', width: '100%' })
			, { optional: true }),
	/* 2 */ group([  // block executes in parallel
			query(':enter', [
				style({ transform: 'translateX(-100%)' }),
				animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
			], { optional: true }),
			query(':leave', [
				style({ transform: 'translateX(0%)' }),
				animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
			], { optional: true }),
		])
	]),

	transition('shipping => methods', [
		/* order */
		/* 1 */ query(':enter, :leave', style({ position: 'fixed', width: '100%' })
			  , { optional: true }),
		/* 2 */ group([  // block executes in parallel
			  query(':enter', [
				  style({ transform: 'translateX(100%)' }),
				  animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' })) //affects shipping component
			  ], { optional: true }),
			  query(':leave', [
				  style({ transform: 'translateX(0%)' }),
				  animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' })) //affects checkout component 
			  ], { optional: true }),
		  ])
	  ]),
  
	  transition('methods => shipping', [
	  /* order */
	  /* 1 */ query(':enter, :leave', style({ position: 'fixed', width: '100%' })
			  , { optional: true }),
	  /* 2 */ group([  // block executes in parallel
			  query(':enter', [
				  style({ transform: 'translateX(-100%)' }),
				  animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
			  ], { optional: true }),
			  query(':leave', [
				  style({ transform: 'translateX(0%)' }),
				  animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
			  ], { optional: true }),
		  ])
	  ]),

	  transition('methods => payment', [
		/* order */
		/* 1 */ query(':enter, :leave', style({ position: 'fixed', width: '100%' })
			  , { optional: true }),
		/* 2 */ group([  // block executes in parallel
			  query(':enter', [
				  style({ transform: 'translateX(100%)' }),
				  animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' })) //affects shipping component
			  ], { optional: true }),
			  query(':leave', [
				  style({ transform: 'translateX(0%)' }),
				  animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' })) //affects checkout component 
			  ], { optional: true }),
		  ])
	  ]),
  
	  transition('payment => methods', [
	  /* order */
	  /* 1 */ query(':enter, :leave', style({ position: 'fixed', width: '100%' })
			  , { optional: true }),
	  /* 2 */ group([  // block executes in parallel
			  query(':enter', [
				  style({ transform: 'translateX(-100%)' }),
				  animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
			  ], { optional: true }),
			  query(':leave', [
				  style({ transform: 'translateX(0%)' }),
				  animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
			  ], { optional: true }),
		  ])
	  ])
])

