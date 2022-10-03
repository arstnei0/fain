import './index.css';

export function createRipple() {
	return (event: MouseEvent) => {
		const target = event.currentTarget as HTMLElement;

		const circle = document.createElement("span");
		const diameter = Math.max(target.clientWidth, target.clientHeight);
		const radius = diameter / 2;
	
		circle.style.width = circle.style.height = `${diameter}px`;
		circle.style.left = `${event.clientX - target.offsetLeft - radius}px`;
		circle.style.top = `${event.clientY - target.offsetTop - radius}px`;
		circle.classList.add("ripple");
	
		const ripple = target.getElementsByClassName("ripple")[0];
	
		if (ripple) {
			ripple.remove();
		}
	
		target.appendChild(circle);
	};
}

export function on(target: HTMLElement) {
	return target.addEventListener('click', createRipple());
}