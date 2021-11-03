import cpu from './images/items/cpu.jpg';
import cooler from './images/items/cooler.jpg';
import motherboard from './images/items/motherboard.jpg';
import memory from './images/items/memory.jpg';
import gpu from './images/items/gpu.jpg';
import cpuCase from './images/items/case.jpg';
import powerSupply from './images/items/power-supply.jpg';
import operatingSystem from './images/items/operating-system.jpg';
import monitor from './images/items/monitor.jpg';
import mouse from './images/items/mouse.jpg';
import keyboard from './images/items/keyboard.jpg';

const data = [
	{
		id: 0,
		name: 'CPU',
		price: 150,
		description: '6 cores/12 threads unlocked',
		image: cpu,
	},
	{
		id: 1,
		name: 'Cooler',
		price: 40,
		description: 'Direct contact technology: 4 Heat Pipe with exclusive direct contact Technology effectively provides excellent heat dissipation.',
		image: cooler,
	},
	{
		id: 2,
		name: 'Motherboard',
		price: 180,
		description: 'AMD AM4 Socket and PCIe 4. 0: The perfect pairing for Zen 3 Ryzen 5000 & 3rd Gen AMD Ryzen CPUs.',
		image: motherboard,
	},
	{
		id: 3,
		name: 'Memory',
		price: 67,
		description: 'Vengeance LPX is optimized for wide compatibility with the latest Intel and AMD DDR4 motherboards.',
		image: memory,
	},
	{
		id: 4,
		name: 'GPU',
		price: 300,
		description: 'The ASUS TUF Gaming GeForce GTX 1650 is built with the breakthrough graphics performance of the award-winning NVIDIA.',
		image: gpu,
	},
	{
		id: 5,
		name: 'Case',
		price: 75,
		description: 'The case is equipped with a 2pcs dust filter, and the top magnetic strip dust filter protects the case.',
		image: cpuCase,
	},
	{
		id: 6,
		name: 'Power Supply',
		price: 63,
		description: '650w ATX gaming pc power supply.',
		image: powerSupply,
	},
	{
		id: 7,
		name: 'Operating System',
		price: 130,
		description: 'Windows 10 delivers comprehensive protection: Including antivirus, firewall, Internet protection, and more.',
		image: operatingSystem,
	},
	{
		id: 8,
		name: 'Monitor',
		price: 100,
		description: 'High refresh rate 27″ WQHD models hit the sweet spot for many when it comes to price and all-round performance.',
		image: monitor,
	},
	{
		id: 9,
		name: 'Mouse',
		price: 12.5,
		description: 'The RFQMOUSEB is an optical wireless mouse with a 1200 dpi optical sensor, three soft-click buttons and scroll wheel for a precise and smooth control.',
		image: mouse,
	},
	{
		id: 10,
		name: 'Keyboard',
		price: 50,
		description: 'HyperX first compact model called the Alloy Origins 60.',
		image: keyboard,
	},
];

export default data;