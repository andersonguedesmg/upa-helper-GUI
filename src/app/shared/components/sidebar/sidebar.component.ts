import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  menu: any[] = [
    {
      displayName: 'Dashboard',
      iconName: 'dashboard',
      route: '/',
    },
    {
      displayName: 'Atendimento',
      iconName: 'emergency',
      children: [
        {
          displayName: 'Novo',
          iconName: 'add_circle',
          route: '/atendimento/novo',
        },
        {
          displayName: 'Sala de Espera',
          iconName: 'assignment',
          route: '/sala-de-espera',
        },
        {
          displayName: 'Todos',
          iconName: 'source',
          route: '/atendimentos',
        },
      ],
    },
    {
      displayName: 'Paciente',
      iconName: 'person',
      children: [
        {
          displayName: 'Novo',
          iconName: 'person_add',
          route: '/paciente/novo',
        },
        {
          displayName: 'Todos',
          iconName: 'source',
          route: '/pacientes',
        },
      ],
    },
    {
      displayName: 'Usuário',
      iconName: 'badge',
      children: [
        {
          displayName: 'Novo',
          iconName: 'person_add',
          route: '/usuario/novo',
        },
        {
          displayName: 'Todos',
          iconName: 'source',
          route: '/usuarios',
        },
      ],
    },
    {
      displayName: 'Triagem',
      iconName: 'local_hospital',
      children: [
        {
          displayName: 'Nova',
          iconName: 'add_circle',
          route: '/triagem',
        },
      ],
    },
  ];
}
