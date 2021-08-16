import { Component, OnInit, ViewChild } from '@angular/core';

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
          route: '/atendimentos',
        },
        {
          displayName: 'Lista de Espera',
          iconName: 'assignment',
          route: '/pacientes',
        },
        {
          displayName: 'Todos',
          iconName: 'source',
          route: '/',
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
          route: '/cadastro-de-paciente',
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
          route: '/cadastro-de-usuario',
        },
        {
          displayName: 'Todos',
          iconName: 'source',
          route: '/',
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
          route: '/',
        },
        {
          displayName: 'Todas',
          iconName: 'source',
          route: '/triagem',
        },
      ],
    },
  ];
}
